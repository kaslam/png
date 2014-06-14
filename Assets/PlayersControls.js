#pragma strict


var moveUp: KeyCode;
var moveDown: KeyCode;
var speed: float = 10;

var playerTouches: int[] = [-1, -1];

var dist: float;
var dragging: boolean = false;
var offset: Vector3;
var toDrag: Transform;


function Start () {
    playerTouches = [-1, -1];
}

function resetPlayer(touchNumber: int) {
    for(var i = 0; i < playerTouches.length; ++i) {
        if(touchNumber == playerTouches[i]) {
            playerTouches[i] = -1;
        }
    }
}

function getCollider(vec: Vector2) {
    var ray : Ray = Camera.main.ScreenPointToRay(vec);
    var hit : RaycastHit2D = Physics2D.Raycast(ray.origin, ray.direction);

    if (hit) {
        if (hit.collider != null) {
            Debug.Log(hit.collider.name);

            toDrag = hit.transform;
            dist = hit.transform.position.z - Camera.main.transform.position.z;
            var v3: Vector3 = new Vector3(vec.x, vec.y, dist);
            v3 = Camera.main.ScreenToWorldPoint(v3);
            offset = toDrag.position - v3;
            dragging = true;


            return hit.collider.name;
        } else {
            Debug.Log("is null");
            return "null";
        }
    } else {
        Debug.Log("empty");
        return "";
    }
    return "";
}

function processTouch(touch: Touch, touchNumber: int) {

    if(touch.phase == TouchPhase.Began) {
        var colliderName: String = getCollider(touch.position);
        if(colliderName == "Player01" && playerTouches[0] == -1) {
            playerTouches[0] = touchNumber;
        } else if(colliderName == "Player02" && playerTouches[1] == -1) {
            playerTouches[1] = touchNumber;
        }
    } else if(touch.phase == TouchPhase.Moved) {
        Debug.Log("touchNumber : " + touchNumber);
        Debug.Log("playerTouches : " + playerTouches[0]);
        if(touchNumber == playerTouches[0]) {
            Debug.Log("touchNumber == playerTouches[0]");

            var v3: Vector3 = new Vector3(Input.mousePosition.x, Input.mousePosition.y, dist);
            v3 = Camera.main.ScreenToWorldPoint(v3);
            toDrag.position = v3 + offset;
        }
    } else if(touch.phase == TouchPhase.Ended || touch.phase == TouchPhase.Canceled) {
        resetPlayer(touchNumber);
    }
}

function Update() {

    if(Input.touchCount > 0) {
        //Debug.Log("count = " + Input.touchCount);
        for(var i = 0; i < Input.touchCount; i++)
        {
            processTouch(Input.GetTouch(i), i);
            //Debug.Log("touch : " + i + "   " + Input.GetTouch(i).position);
        }
    }
}

/*
function Update ()
{
    if(Input.GetKey(moveUp))
    {
        rigidbody2D.velocity.y = speed;
    }
    else if(Input.GetKey(moveDown))
    {
        rigidbody2D.velocity.y = speed * (-1);
    }
    else
    {
        rigidbody2D.velocity.y = 0;
    }
    rigidbody2D.velocity.x = 0;
}
*/
