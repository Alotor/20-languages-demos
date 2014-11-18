<!DOCTYPE html>
<html>
    <head>
        <title>PHP demo</title>
    </head>
    <body>
        <?php if (isset($_REQUEST['param'])) {?>
            <h1><?= $_REQUEST['param'] ?>
        <?php } else {?>
            <a href="?param=test">TEST</a>
        <?php } ?>
    </body>
</html>
