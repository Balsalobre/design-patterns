import { describe, it, beforeEach } from 'https://deno.land/std@0.148.0/testing/bdd.ts';
import { assert, assertEquals } from 'https://deno.land/std@0.148.0/testing/asserts.ts';

import { IConnection } from "./src/dao/entities/conexion.interface.ts";
import { MySQLConnection } from "./src/dao/mysql-connetion.ts";
import { PersonDAOImpl } from "./src/dao/personDAOImpl.ts";
import { PersonDAO } from "./src/dao/entities/personDAO.ts";

let connection: IConnection;
let dao: PersonDAO;

beforeEach(() => {
  connection = new MySQLConnection('balsalobre', 'sdkajn342', 'localhost:2727');				
  dao = new PersonDAOImpl();
})

describe('Getting class injected', () => {
  it('Connection has to be undefined', () => {
    assert(dao.connection === undefined);
  });

  it('Connection has to be initialize', () => {
    dao.connection = connection;
    assert(dao.connection instanceof MySQLConnection);
    assertEquals(dao.connection.user, 'balsalobre');
  });
});