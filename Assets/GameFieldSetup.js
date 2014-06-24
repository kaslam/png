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
    blue_v.position = new Vector2(-4.7f, mainCam.ScreenToWorldPoint (new Vector3 (0f, 0f, 0f)).y);
    blue_v.transform.localScale.y = Screen.width / 500.0;
    green_v.position = new Vector2(4.7f, mainCam.ScreenToWorldPoint (new Vector3 (0f, 0f, 0f)).y);
    green_v.transform.localScale.y = Screen.width / 500.0;
}

