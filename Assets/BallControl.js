#pragma strict

var ballSpeed: float = 100;

function Start () {
    resetBall(null);
}

function Update() {
	var xVal : float = rigidbody2D.velocity.x;
    rigidbody2D.velocity.x = rigidbody2D.velocity.x * 0.999f;
    rigidbody2D.velocity.y = rigidbody2D.velocity.y * 0.999f;
}

function OnCollisionEnter2D (colInfo : Collision2D) {
    if(colInfo.collider.tag == "Player") {
        Debug.Log("velocity : " + colInfo.relativeVelocity);
        Debug.Log("velocity2 : " + colInfo.transform);
        rigidbody2D.velocity.x = (colInfo.transform.position.x - rigidbody2D.gameObject.GetComponent(Transform).position.x) * 5;
        rigidbody2D.velocity.y = (colInfo.transform.position.y - rigidbody2D.gameObject.GetComponent(Transform).position.y) * 5;
        audio.pitch = Random.Range(0.8f, 1.2f);
        audio.Play();
    }
    if(colInfo.collider.tag == "wall") {
        audio.pitch = Random.Range(0.8f, 1.2f);
        audio.Play();
        colInfo.collider.gameObject.GetComponent(SpriteRenderer).color = new Color(1.0, 1.0, 1.0, 1.0);
        StartCoroutine(lowerOpacity(colInfo, 0.1));
    }
}

function lowerOpacity(colInfo : Collision2D, sec : float) {
    yield WaitForSeconds (sec);
    colInfo.collider.gameObject.GetComponent(SpriteRenderer).color = new Color(1.0, 1.0, 1.0, 0.6);
}

function resetBall(hitInfo : Collider2D) {
    var shift: int = 0;
    if(hitInfo) {
        if(hitInfo.gameObject.tag == "leftWall") {
            shift = 20;
        } else {
            shift = -20;
        }
    }
    rigidbody2D.velocity.x = shift;
    rigidbody2D.velocity.y = 0;
    transform.position.x = shift;
    transform.position.y = 0;

    yield WaitForSeconds(2);
    goBall();
}

function goBall() {
    var randomNumber = Random.Range(0, 2);
    if(randomNumber <= 0.5) {
        rigidbody2D.AddForce(new Vector2(ballSpeed, 10));
    } else {
        rigidbody2D.AddForce(new Vector2(-ballSpeed, -10));
    }
}