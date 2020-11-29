<?php
    // Check for empty fields
    if(empty($_POST['name'])      ||
        empty($_POST['email'])     ||
        empty($_POST['subject'])     ||
        empty($_POST['message'])   ||
        !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL)) {
        echo "No arguments Provided!";
        return false;
    }
    
    $name = strip_tags(htmlspecialchars($_POST['name']));
    $email_address = strip_tags(htmlspecialchars($_POST['email']));
    $subject = strip_tags(htmlspecialchars($_POST['subject']));
    $message = strip_tags(htmlspecialchars($_POST['message']));
    
    // Create the email and send the message
    $to = 'abatefrancesco98@gmail.com';
    $email_subject = "Fabate Website new message > $subject";
    $email_body = "Hi Francesco, you received a new message from the contact form on www.fabate.altervista.org\n\n".">>> MESSAGE DETAILS <<<\n\n***************************\n\n$subject\nfrom $name <$email_address>\n\nMessage:\n$message\n\n---\n\nwww.fabate.altervista.org";
    $headers = "From: noreply@fabate.altervista.org\n";
    $headers .= "Reply-To: $email_address";   
    mail($to,$email_subject,$email_body,$headers);
    return true;
?>