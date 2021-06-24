<?php
    header( 'Location: /index.php', true, 303 );
    header("Cache-Control : no-store, no-cache, must-revalidate, max-age=0");
    session_start();
    setcookie ("entered", "", time()-14800);
    setcookie ("name", "", time()-14800);
    setcookie ("surname", "", time()-14800);
    setcookie ("login", "", time()-14800);
    setcookie ("status", "", time()-14800);
    setcookie ("img", "", time()-14800);
    session_destroy();
?>