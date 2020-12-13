<?php
$links=array(
    array("name" => "foo",
"url"  => "foo.com",
"desc" => "foo"),
array("name" => "bar",
"url"  => "bar.com",
"desc" => "foo"),
array("name" => "haha",
"url"  => "foo.com",
"desc" => "foo"),
array("name" => "hehe",
"url"  => "foo.com",
"desc" => "foo")
);


$index=mt_rand(0,sizeof($links)-1);
$current_link=$links[$index];

echo "<h1>向您推荐：</h1>
<br>
<a href=\"".$current_link["url"]."\">".$current_link["name"]."</a>
<br>
<p>".$current_link["desc"]."</p>";
?>