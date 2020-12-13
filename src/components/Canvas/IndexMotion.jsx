import React, {useEffect} from 'react';
import {Button, Modal, Form, Input, Checkbox} from 'antd';
import {LogoutOutlined, PlayCircleOutlined} from '@ant-design/icons';
import {connect} from 'dva';
import styles from './index.css';
import router from 'umi/router';
import Matter from 'matter-js';


// import { formatCountdown } from 'antd/lib/statistic/utils';
// import { message } from 'antd'
const IndexMotion = props => {

    useEffect(() => {
        var Engine = Matter.Engine,
            Render = Matter.Render,
            Runner = Matter.Runner,
            Body = Matter.Body,
            Events = Matter.Events,
            Composite = Matter.Composite,
            Composites = Matter.Composites,
            Common = Matter.Common,
            MouseConstraint = Matter.MouseConstraint,
            Mouse = Matter.Mouse,
            World = Matter.World,
            Bodies = Matter.Bodies;

// create engine
        var engine = Engine.create(),
            world = engine.world;

// create renderer
        var render = Render.create({
            element: document.getElementById('c'),
            engine: engine,
            options: {
                width: document.body.clientWidth,
                height: 900,
                showAngleIndicator: true,
                wireframes: false,
                background: '#3E3A39',
            }
        });
        Render.run(render);

// create runner
        var runner = Runner.create();
        Runner.run(runner, engine);

// add bodies
        World.add(world, [
            Bodies.rectangle(0, 0, 2200, 20, {isStatic: true}),
            Bodies.rectangle(0, 600, 2200, 20, {isStatic: true}),
            Bodies.rectangle(1080, 300, 20, 600, {isStatic: true}),
            Bodies.rectangle(-360, 300, 20, 600, {isStatic: true})
        ]);
        var explosion = function (engine) {
            var bodies = Composite.allBodies(engine.world);

            for (var i = 0; i < bodies.length; i++) {
                var body = bodies[i];

                if (!body.isStatic && body.position.y >= 500) {
                    var forceMagnitude = 0.05 * body.mass;

                    Body.applyForce(body, body.position, {
                        x: (forceMagnitude + Common.random() * forceMagnitude) * Common.choose([1, -1]),
                        y: -forceMagnitude + Common.random() * -forceMagnitude
                    });
                }
            }
        };

        var timeScaleTarget = 1,
            counter = 0;


        Events.on(engine, 'afterUpdate', function (event) {
            // tween the timescale for bullet time slow-mo
            engine.timing.timeScale += (timeScaleTarget - engine.timing.timeScale) * 0.05;

            counter += 1;

            // every 1.5 sec
            if (counter >= 60 * 1.5) {

                // flip the timescale
                if (timeScaleTarget < 1) {
                    timeScaleTarget = 1;
                } else {
                    timeScaleTarget = 0.05;
                }

                // create some random forces
                explosion(engine);

                // reset counter
                counter = 0;
            }
        });

        var bodyOptions1 = {
            frictionAir: 0,
            friction: 0.0001,
            restitution: 0.8,
            render: {
                fillStyle: "#5ADCE7",
            }

        };
        var bodyOptions2 = {
            frictionAir: 0,
            friction: 0.0001,
            restitution: 0.8,
            render: {
                fillStyle: "#9FAFFF",
            }

        };
        var bodyOptions3 = {
            frictionAir: 0,
            friction: 0.0001,
            restitution: 0.8,
            render: {
                fillStyle: "#9FC8FF",
            }

        };
        var bodyOptions4 = {
            frictionAir: 0,
            friction: 0.0001,
            restitution: 0.8,
            render: {
                fillStyle: "#637AFF",
            }
        };


// add some small bouncy circles... remember Swordfish?
        World.add(world, Composites.stack(20, 100, 15, 3, 20, 40, function (x, y) {
            return Bodies.circle(x, y, Common.random(10, 20), bodyOptions1);
        }));

// add some larger random bouncy objects
        World.add(world, Composites.stack(50, 50, 8, 3, 0, 0, function (x, y) {
            switch (Math.round(Common.random(0, 1))) {

                case 0:
                    if (Common.random() < 0.8) {
                        return Bodies.rectangle(x, y, Common.random(20, 50), Common.random(20, 50), bodyOptions2);
                    } else {
                        return Bodies.rectangle(x, y, Common.random(80, 120), Common.random(20, 30), bodyOptions3);
                    }
                case 1:
                    return Bodies.polygon(x, y, Math.round(Common.random(4, 8)), Common.random(20, 50), bodyOptions4);

            }
        }));

// add mouse control
        var mouse = Mouse.create(render.canvas),
            mouseConstraint = MouseConstraint.create(engine, {
                mouse: mouse,
                constraint: {
                    stiffness: 0.2,
                    render: {
                        visible: false
                    }
                }
            });


        World.add(world, mouseConstraint);

// keep the mouse in sync with rendering
        render.mouse = mouse;
        Render.lookAt(render, {
            min: {x: 0, y: 0},
            max: {x: 800, y: 600}
        });
        getChart();

    }, []);

    const {dispatch, ShowLoginStatus, LoginResp, hotd_data, Word_data} = props;

    console.log(hotd_data);
    console.log(Word_data);
    const tailLayout = {
        wrapperCol: {offset: 8, span: 16},

    };
    const onFinish = values => {

        let a = values;
        console.log(a)
        dispatch({
            type: 'test/login',
            payload: a,
            callback(LoginResp) {
                if (LoginResp === 'okk!') {
                    console.log('chengle');
                    router.push('/links');
                }
            },

        });

    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };


    return (

        <div id='c'>
            <span className={styles.text1}>Home for Designer</span>
            <Button type="primary" className={styles.button1} onClick={GoToLogin} shape="round"
                    icon={<LogoutOutlined/>}>登录</Button>
            <Button type="primary" className={styles.button2} onClick={GoToStart} shape="round"
                    icon={<PlayCircleOutlined/>}>快速开始</Button>

            <Modal
                style={{fontSize: '30px'}}
                title="登录"
                visible={ShowLoginStatus > 0 ? 1 : false}
                onCancel={HideLogin}
                footer={null}
            >
                <Form

                    name="basic"
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    size={'large'}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{required: true, message: 'Please input your username!'}]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{required: true, message: 'Please input your password!'}]}
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>


        </div>

    );

    function GoToLogin() {
        dispatch({
            type: 'test/ShowLogin',
        });
    }

    function GoToStart() {
        if (hotd_data !== null) {
            router.push('/main')
        }

    }

    function HideLogin() {
        dispatch({
            type: 'test/HideLogin',
        });
    }

    function getChart() {
        dispatch({
            type: 'test/getChart',
        })

    }


};


export default connect(({test: {mes, Mysql_data, ShowLoginStatus, LoginResp, Chart_data, hotd_data, Word_data}}) => ({
    mes,
    Mysql_data,
    ShowLoginStatus,
    LoginResp,
    Chart_data,
    hotd_data,
    Word_data

}))(IndexMotion);
