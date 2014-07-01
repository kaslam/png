#pragma strict

var mainCam: Camera;

var leftWall: BoxCollider2D;
var rightWall: BoxCollider2D;

var Player01: Transform;
var Player02: Transform;

function Start () {

    leftWall.size = new Vector2(1f, mainCam.ScreenToWorldPoint (new Vector3 (0f, Screen.height, 0f)).y);
    leftWall.center = new Vector2(mainCam.ScreenToWorldPoint (new Vector3 (0f, 0f, 0f)).x - 0.7f, 0f);
    
    rightWall.size = new Vector2(1f, mainCam.ScreenToWorldPoint (new Vector3 (0f, Screen.height, 0f)).y);
    rightWall.center = new Vector2(mainCam.ScreenToWorldPoint (new Vector3 (Screen.width, 0f, 0f)).x + 0.7f, 0f);

    Player01.position.x = mainCam.ScreenToWorldPoint(new Vector3(75f, 0f, 0f)).x;
    Player02.position.x = mainCam.ScreenToWorldPoint(new Vector3(Screen.width - 75f, 0f, 0f)).x;
}