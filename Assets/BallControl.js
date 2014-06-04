#pragma strict

var ballSpeed: float = 100;

function Start () {
    resetBall();
}

function Update() {
	var xVal : float = rigidbody2D.velocity.x;
	if(xVal < 18 && xVal > -18 && xVal != 0) {
		if(xVal > 0) {
			rigidbody2D.velocity.x = 20;
		} else {
			rigidbody2D.velocity.x = -20;
		} 
	}
}

function OnCollisionEnter2D (colInfo : Collision2D) {
    if(colInfo.collider.tag == "Player") {
        rigidbody2D.velocity.y = rigidbody2D.velocity.y/2 + colInfo.collider.rigidbody2D.velocity.y/3;
        audio.pitch = Random.Range(0.8f, 1.2f);
        audio.Play();
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