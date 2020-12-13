import React, {Component, useEffect} from 'react';
import {Button, Table} from 'antd';
import {connect} from 'dva'
import {Calendar} from 'antd';
import styles from './index.css';
import {Carousel} from 'antd';
import {Banner01} from '../../assets/yay.jpg'
import router from 'umi/router';
import Slider from "react-slick";
import {Statistic, Row, Col} from 'antd';
import {LikeOutlined} from '@ant-design/icons';
import {Card} from 'antd';
import Matter from 'matter-js';
import Echarts from "../Echart/Echart"

function onPanelChange(value, mode) {
    console.log(value.format('YYYY-MM-DD'), mode);
}

const {Meta} = Card;
const Menu = props => {

    useEffect(() => {
        var Engine = Matter.Engine,
            Events = Matter.Events,
            Render = Matter.Render,
            Runner = Matter.Runner,
            Body = Matter.Body,
            Composite = Matter.Composite,
            Composites = Matter.Composites,
            Constraint = Matter.Constraint,
            MouseConstraint = Matter.MouseConstraint,
            Mouse = Matter.Mouse,
            World = Matter.World,
            Bodies = Matter.Bodies,
            Vector = Matter.Vector;

// create engine
        var engine = Engine.create(),
            world = engine.world;

// create renderer
        var render = Render.create({
            element: document.getElementById('a'),
            engine: engine,
            options: {
                width: document.body.clientWidth * 0.5,
                height: document.body.clientHeight * 0.4,
                wireframes: false,
                background: "white"
            }
        });

        Render.run(render);

// create runner
        var runner = Runner.create();
        Runner.run(runner, engine);

// add bodies
        var group = Body.nextGroup(true),
            length = 200,
            width = 25;

        var pendulum = Composites.stack(350, 90, 2, 1, -20, 0, function (x, y) {
            return Bodies.rectangle(x, y, length, width, {
                collisionFilter: {group: group},
                frictionAir: 0,
                chamfer: 50,
                render: {
                    fillStyle: 'transparent',
                    lineWidth: 1
                }
            });
        });

        pendulum.bodies[0].render.strokeStyle = '#4a485b';
        pendulum.bodies[1].render.strokeStyle = '#4a485b';

        world.gravity.scale = 0.002;

        Composites.chain(pendulum, 0.45, 0, -0.45, 0, {
            stiffness: 0.9,
            length: 0,
            angularStiffness: 0.7,
            render: {
                strokeStyle: '#4a485b'
            }
        });

        Composite.add(pendulum, Constraint.create({
            bodyB: pendulum.bodies[0],
            pointB: {x: -length * 0.42, y: 0},
            pointA: {x: pendulum.bodies[0].position.x - length * 0.42, y: pendulum.bodies[0].position.y},
            stiffness: 0.9,
            length: 0,
            render: {
                strokeStyle: '#4a485b'
            }
        }));

        var lowerArm = pendulum.bodies[1];

        Body.rotate(lowerArm, -Math.PI * 0.3, {
            x: lowerArm.position.x - 100,
            y: lowerArm.position.y
        });

        World.add(world, pendulum);

        var trail = [];

        Events.on(render, 'afterRender', function () {
            trail.unshift({
                position: Vector.clone(lowerArm.position),
                speed: lowerArm.speed
            });

            Render.startViewTransform(render);
            render.context.globalAlpha = 0.7;

            for (var i = 0; i < trail.length; i += 1) {
                var point = trail[i].position,
                    speed = trail[i].speed;

                var hue = 250 + Math.round((1 - Math.min(1, speed / 10)) * 170);
                render.context.fillStyle = 'hsl(' + hue + ', 100%, 55%)';
                render.context.fillRect(point.x, point.y, 2, 2);
            }

            render.context.globalAlpha = 1;
            Render.endViewTransform(render);

            if (trail.length > 2000) {
                trail.pop();
            }
        });

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

// fit the render viewport to the scene
        Render.lookAt(render, {
            min: {x: 0, y: 0},
            max: {x: 700, y: 600}
        });

// context for MatterTools.Demo

// getdata();

    }, []);


    const {dispatch, mes, Mysql_data, Chart_data, hotd_data, Word_data} = props;
    const contentStyle = {
        height: '1000px',
        color: '#fff',
        lineHeight: '400px',
        textAlign: 'center',
        background: '#364d79',

    };

    console.log(Chart_data)
    const {Countdown} = Statistic;
    const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK
    let word = [];
    let hotd = [];
    let word2 = [];


    function onFinish() {
        console.log('finished!');
    }


    function getChart() {
        dispatch({
            type: 'test/getChart',
        })

    }


    return (
        <div>
            <div id='a' style={{position: "relative"}}>


                <div className={styles.Calendar}>
                    <Calendar fullscreen={false} onPanelChange={onPanelChange}/>
                </div>


                <div className={styles.data}>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Countdown title="Countdown" value={deadline} onFinish={onFinish}/>
                        </Col>
                        <Col span={12}>
                            <Countdown title="Million Seconds" value={deadline} format="HH:mm:ss:SSS"/>
                        </Col>
                        <Col span={24} style={{marginTop: 32}}>
                            <Countdown title="Day Level" value={deadline} format="D 天 H 时 m 分 s 秒"/>
                        </Col>
                    </Row>
                </div>

            </div>

            <div>
                <Echarts data={{
                    xdata: Word_data,
                    ydata: {
                        ydata1: hotd_data,

                    }
                }}/>
            </div>


        </div>


    );

    function GoToStart() {
        router.push('/spider')
    }

    function test1() {
        dispatch({
            type: 'test/test1',
        })
    }

    function test2() {
        dispatch({
            type: 'test/test2',
            payload: 'wxy'
        })
    }


};

export default connect(({test: {mes, Mysql_data, Chart_data, hotd_data, Word_data},}) => ({
    mes,
    Mysql_data,
    Chart_data, hotd_data, Word_data,
}))(Menu);