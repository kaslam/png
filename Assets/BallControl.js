#pragma strict

var ballSpeed: float = 100;

function Start () {
    resetBall();
}

function OnCollisionEnter2D (colInfo : Collision2D) {
    if(colInfo.collider.tag == "Player") {
        rigidbody2D.velocity.y = rigidbody2D.velocity.y/2 + colInfo.collider.rigidbody2D.velocity.y/3;
    }
}

function resetBall() {
    rigidbody2D.velocity.x = 0;
    rigidbody2D.velocity.y = 0;
    transform.position.x = 0;
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