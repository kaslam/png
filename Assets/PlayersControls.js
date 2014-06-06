#pragma strict


var moveUp: KeyCode;
var moveDown: KeyCode;
var speed: float = 10;


function Start () {
}

function Update() {
    if (Input.GetMouseButtonDown(0)) {
    	//Debug.Log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    	//Debug.Log("pos: " + Input.mousePosition);
    	var ray : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
    	var hit : RaycastHit2D = Physics2D.Raycast(ray.origin, ray.direction);

		if (hit) {
			if (hit.collider != null) {
				Debug.Log(hit.collider.name);
			} else {
				Debug.Log("is null");
			}
		} else {
			Debug.Log("asassa");
		}
		
        //var wp : Vector3 = Camera.main.ScreenToWorldPoint(Input.GetTouch(0).position);
        //var touchPos : Vector2 = new Vector2(wp.x, wp.y);
    	//if (collider2D == Physics2D.OverlapPoint(touchPos)) {
        ///	Debug.Log("touch !!!!!!!!!!");
    	//}
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
