package com.gyk.study.jpa.easy;


import com.mysql.jdbc.DatabaseMetaData;
import com.mysql.jdbc.MySQLConnection;

/**
 * 〈一句话功能简述〉
 * 〈功能详细描述〉
 *
 * @author guoyka
 * @version 1.0, 2018/12/16
 */
public class MyDatabaseMetaData extends DatabaseMetaData {
    public MyDatabaseMetaData(MySQLConnection connToSet, String databaseToSet) {
        super(connToSet, databaseToSet);
    }
//
//    public MyDatabaseMetaData(JdbcConnection connToSet, String databaseToSet, ResultSetFactory resultSetFactory) {
//        super(connToSet, databaseToSet, resultSetFactory);
//    }
}
