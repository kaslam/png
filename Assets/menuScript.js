#pragma strict

var buttonWidth: int;
var buttonHeight: int;
var padding: int;

function Start () {
    buttonWidth = 140;
    buttonHeight = 40;
    padding = 10;
}

function Update () {

}

function OnGUI () {
    GUI.Box (Rect (Screen.width - buttonWidth - 35, Screen.height - 2 * buttonHeight - 70 , buttonWidth + 30, buttonHeight * 2 + 60), "Play");

    if (GUI.Button (Rect (Screen.width - buttonWidth - 2 * padding, Screen.height - 2 * buttonHeight - 3 * padding, buttonWidth, buttonHeight), "1 Player")) {
        Application.LoadLevel("mainscene");
    }

    if (GUI.Button (Rect (Screen.width - buttonWidth - 2 * padding, Screen.height - 2 * buttonHeight + 2 * padding, buttonWidth, buttonHeight), "2 Player")) {
        Application.LoadLevel("mainscene");
    }
}
