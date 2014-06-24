#pragma strict


var moveUp: KeyCode;
var moveDown: KeyCode;
var speed: float = 10;

var playerTouches: int[] = [-1, -1];
var playerTransforms: Transform[] = new Transform[2];
var playerDistances: float[] = [0.0, 0.0];
var playerOffsets: Vector3[] = new Vector3[2];

var dist: float;
var dragging: boolean = false;
var offset: Vector3;
var toDrag: Transform;


function Start () {
    playerTouches = [-1, -1];
    playerDistances = [0.0, 0.0];

    playerTransforms = new Transform[2];
    playerTransforms[0] = null;
    playerTransforms[1] = null;

    playerOffsets = new Vector3[2];
    //playerOffsets[0] = null;
    //playerOffsets[1] = null;
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
            var index: int = -1;
            if(hit.collider.name == "Player01") {
                index = 0;
            } else if(hit.collider.name == "Player02") {
                index = 1;
            }

            if(index >= 0) {
                Debug.Log("index: " + index);
                playerTransforms[index] = hit.transform;
                playerDistances[index] = hit.transform.position.z - Camera.main.transform.position.z;
                var v3: Vector3 = new Vector3(vec.x, vec.y, playerDistances[index]);
                v3 = Camera.main.ScreenToWorldPoint(v3);
                playerOffsets[index] = playerTransforms[index].position - v3;
            }

            return hit;
        } else {
            return;
        }
    } else {
        return;
    }
    return;
}

function processTouch(touch: Touch, touchNumber: int) {

    if(touch.phase == TouchPhase.Began) {
        var colliderHit: RaycastHit2D;
        colliderHit = getCollider(touch.position);
        if(colliderHit) {
            if(colliderHit.collider.name == "Player01" && playerTouches[0] == -1) {
                playerTouches[0] = touchNumber;
            } else if(colliderHit.collider.name == "Player02" && playerTouches[1] == -1) {
                playerTouches[1] = touchNumber;
            }
        }
    } else if(touch.phase == TouchPhase.Moved) {
        for(var i = 0; i < playerTouches.Length; ++i) {
            if(touchNumber == playerTouches[i]) {
                var v3: Vector3 = new Vector3(touch.position.x, touch.position.y, playerDistances[i]);
                v3 = Camera.main.ScreenToWorldPoint(v3);
                playerTransforms[i].position = v3 + playerOffsets[i];
            }
        }
    } else if(touch.phase == TouchPhase.Ended || touch.phase == TouchPhase.Canceled) {
        resetPlayer(touchNumber);
    }
}

function Update() {

    if(Input.touchCount > 0) {
        for(var i = 0; i < Input.touchCount; i++)
        {
            processTouch(Input.GetTouch(i), i);
        }
    }
}

