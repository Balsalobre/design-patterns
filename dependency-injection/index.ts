import { IConnection } from "./src/dao/entities/conexion.interface.ts";
import { PersonDAO } from "./src/dao/entities/personDAO.ts";
import { MySQLConnection } from "./src/dao/mysql-connetion.ts";
import { PersonDAOImpl } from "./src/dao/personDAOImpl.ts";
import { PostgreConnection } from "./src/dao/postgre-connection.ts";


const connection1: IConnection = new MySQLConnection('balsalobre', 'sdkajn342', 'localhost:2727');				
const connection2: IConnection = new PostgreConnection('balsalobre', 'fda3fsds', '192.168.1.56:2424');
const dao: PersonDAO = new PersonDAOImpl();

dao.connection = connection1;
dao.listAll();
