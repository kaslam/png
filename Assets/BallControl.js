#pragma strict

var ballSpeed: float = 100;

var playerScript: PlayersControls;

function Start () {
    resetBall(null);
    playerScript = GameObject.FindGameObjectWithTag("Player").gameObject.GetComponent(PlayersControls);
}

function Update() {
	var xVal : float = rigidbody2D.velocity.x;
    rigidbody2D.velocity.x = rigidbody2D.velocity.x * 0.999f;
    rigidbody2D.velocity.y = rigidbody2D.velocity.y * 0.999f;
}

function OnCollisionEnter2D (colInfo : Collision2D) {

    if(colInfo.collider.tag == "Player") {
    
        //playerScript = GameObject.FindGameObjectWithTag("Player").gameObject.GetComponent(PlayersControls);
        playerScript = colInfo.collider.gameObject.GetComponent(PlayersControls);

        var dp = new Vector2(0, 0);
        if(colInfo.collider.gameObject.name == "Player01") {
            dp = playerScript.deltaPos[0];
        } else if(colInfo.collider.gameObject.name == "Player02"){
            dp = playerScript.deltaPos[1];
        }
        var ray : Ray = Camera.main.ScreenPointToRay(new Vector2(colInfo.transform.position.x, colInfo.transform.position.y));
        var hit : RaycastHit2D = Physics2D.Raycast(ray.origin, ray.direction);

        Debug.Log("velocity player : " + dp);
        Debug.Log("velocity ball : " + rigidbody2D.velocity);
        if(Mathf.Abs(rigidbody2D.velocity.x) < Mathf.Abs(dp.x * 3)) {
            rigidbody2D.velocity.x = dp.x * 3;
        }
        if(Mathf.Abs(rigidbody2D.velocity.y) < Mathf.Abs(dp.y * 3)) {
            rigidbody2D.velocity.x = dp.y * 3;
        }

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
/*
    var randomNumber = Random.Range(0, 2);
    if(randomNumber <= 0.5) {
        rigidbody2D.AddForce(new Vector2(ballSpeed, 10));
    } else {
        rigidbody2D.AddForce(new Vector2(-ballSpeed, -10));
    }
    */
}