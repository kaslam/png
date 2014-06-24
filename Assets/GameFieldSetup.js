#pragma strict

var mainCam: Camera;

var blue_h: Transform;
var green_h: Transform;
var red_h: Transform;
var yellow_h: Transform;

var blue_v: Transform;
var green_v: Transform;
var red_v: Transform;
var yellow_v: Transform;


function Start () {
    blue_v.position = new Vector2(0f, mainCam.ScreenToWorldPoint (new Vector3 (0f, 0f, 0f)).y - 0.5f);
}

