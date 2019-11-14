 <?php
 header('Access-Control-Allow-Origin:*');
 header('Access-Control-Allow-Methods:OPTIONS, GET, POST'); // 允许option，get，post请求
 header('Access-Control-Allow-Headers:x-requested-with'); // 允许x-requested-with请求头

    $shipments = json_decode(file_get_contents("getGameNum.json"), true);

    echo json_encode($shipments);
  ?>