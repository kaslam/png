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
    blue_v.position = new Vector2(-4.6f, mainCam.ScreenToWorldPoint (new Vector3 (0f, 0f, 0f)).y);
    blue_v.transform.localScale.y = Screen.width / 470.0;
    blue_v.gameObject.GetComponent(SpriteRenderer).color = new Color(1.0, 1.0, 1.0, 0.6);

    green_v.position = new Vector2(4.6f, mainCam.ScreenToWorldPoint (new Vector3 (0f, 0f, 0f)).y);
    green_v.transform.localScale.y = Screen.width / 470.0;
    green_v.gameObject.GetComponent(SpriteRenderer).color = new Color(1.0, 1.0, 1.0, 0.6);
    
    red_v.position = new Vector2(-4.6f, mainCam.ScreenToWorldPoint (new Vector3 (0f, Screen.height, 0f)).y);
    red_v.transform.localScale.y = Screen.width / 470.0;
    red_v.gameObject.GetComponent(SpriteRenderer).color = new Color(1.0, 1.0, 1.0, 0.6);
    
    yellow_v.position = new Vector2(4.6f, mainCam.ScreenToWorldPoint (new Vector3 (0f, Screen.height, 0f)).y);
    yellow_v.transform.localScale.y = Screen.width / 470.0;
    yellow_v.gameObject.GetComponent(SpriteRenderer).color = new Color(1.0, 1.0, 1.0, 0.6);
    
    // horizontals
    
    blue_h.position = new Vector2(mainCam.ScreenToWorldPoint (new Vector3 (0f, 0f, 0f)).x, -2.8f);
    blue_h.transform.localScale.x = Screen.height / 280.0;
    blue_h.gameObject.GetComponent(SpriteRenderer).color = new Color(1.0, 1.0, 1.0, 0.6);


    green_h.position = new Vector2(mainCam.ScreenToWorldPoint (new Vector3 (Screen.width, 0f, 0f)).x, -2.8f);
    green_h.transform.localScale.x = Screen.height / 280.0;
    green_h.gameObject.GetComponent(SpriteRenderer).color = new Color(1.0, 1.0, 1.0, 0.6);
    
    red_h.position = new Vector2(mainCam.ScreenToWorldPoint (new Vector3 (0f, 0f, 0f)).x, 2.8f);
    red_h.transform.localScale.x = Screen.height / 280.0;
    red_h.gameObject.GetComponent(SpriteRenderer).color = new Color(1.0, 1.0, 1.0, 0.6);
    
    yellow_h.position = new Vector2(mainCam.ScreenToWorldPoint (new Vector3 (Screen.width, 0f, 0f)).x, 2.8f);
    yellow_h.transform.localScale.x = Screen.height / 280.0;
    yellow_h.gameObject.GetComponent(SpriteRenderer).color = new Color(1.0, 1.0, 1.0, 0.6);
}

