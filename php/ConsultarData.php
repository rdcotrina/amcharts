<?php

require_once 'Connect.php';

class ConsultarData extends Connect {

    private $_DB;

    public function __construct() {
        $this->_DB = parent::__construct();
    }

    public function getDaraBarras() {
        $statement = $this->_DB->prepare('EXEC sp_dataBarras');
        $statement->execute([]);

        $result = $statement->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode($result);
    }

}

$parametro = $_POST['parm'];

$consultar = new ConsultarData();

switch ($parametro) {
    case 'B': $consultar->getDaraBarras();
        break;
}



