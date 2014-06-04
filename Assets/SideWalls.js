#pragma strict

function OnTriggerEnter2D (hitInfo : Collider2D) {
    if(hitInfo.name == "Ball") {
        GameManager.Score(transform.name);
        audio.Play();
        hitInfo.gameObject.SendMessage("resetBall");
    }
}
