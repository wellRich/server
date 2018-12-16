package com.gyk.demo.easy;

import com.gyk.demo.entity.UserInfo;
//import com.mysql.cj.conf.ConnectionUrlParser;
//import com.mysql.cj.conf.HostInfo;
//import com.mysql.cj.conf.url.LoadbalanceConnectionUrl;
//import com.mysql.cj.jdbc.*;
//import com.mysql.cj.jdbc.result.ResultSetFactory;
import com.gyk.demo.entity.UserRepository;
import com.mysql.jdbc.ConnectionImpl;
import com.mysql.jdbc.MySQLConnection;
import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.hibernate.HikariConnectionProvider;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.Metadata;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.SessionFactoryBuilder;
import org.hibernate.boot.cfgxml.spi.LoadedConfig;
import org.hibernate.boot.internal.BootstrapContextImpl;
import org.hibernate.boot.internal.MetadataBuilderImpl;
import org.hibernate.boot.internal.SessionFactoryBuilderImpl;
import org.hibernate.boot.model.naming.ImplicitNamingStrategyJpaCompliantImpl;
import org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl;
import org.hibernate.boot.registry.BootstrapServiceRegistry;
import org.hibernate.boot.registry.BootstrapServiceRegistryBuilder;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.boot.registry.classloading.internal.ClassLoaderServiceImpl;
import org.hibernate.boot.spi.BootstrapContext;
import org.hibernate.cfg.Configuration;
import org.hibernate.dialect.Dialect;
import org.hibernate.engine.jdbc.connections.spi.ConnectionProvider;
import org.hibernate.engine.jdbc.env.internal.JdbcEnvironmentImpl;
import org.hibernate.engine.jdbc.env.spi.JdbcEnvironment;
import org.hibernate.engine.jdbc.internal.JdbcServicesImpl;
import org.hibernate.engine.jdbc.spi.JdbcServices;
import org.hibernate.service.ServiceRegistry;
import org.springframework.data.jpa.repository.support.JpaRepositoryFactory;

import javax.persistence.Entity;
import javax.persistence.EntityManager;
import javax.sql.DataSource;
import java.io.File;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Date;
import java.util.Properties;

/**
 * 帮助程序员简单测试jpa接口
 *
 * @author guoyka
 * @version 1.0, 2018/12/16
 */
public class JpaHelper {


    static JpaRepositoryFactory jpaRepositoryFactory = null;
    //    static {
    //
    //        Configuration configuration = new Configuration();
    //        configuration.addProperties();
    //        EntityManager entityManager = configuration.buildSessionFactory().createEntityManager();
    //        jpaRepositoryFactory = new JpaRepositoryFactory(entityManager);
    //    }

    public static void main(String[] args) {

        try {
            PhysicalNamingStrategyStandardImpl physicalNamingStrategyStandard;
            Properties properties = new Properties();
            properties.put("user", "root");
            properties.put("hibernate.connection.url", "jdbc:mysql://localhost:3306/demo");
            properties.put("hibernate.connection.username", "root");
            properties.put("hibernate.connection.password", "123456");
            properties.put("hibernate.connection.driver_class", "com.mysql.jdbc.Driver");
            properties.put("password", "123456");
            properties.put("hibernate.show_sql", "true");
            properties.put("hibernate.format_sql", "true");
            properties.put("hibernate.dialect", "org.hibernate.dialect.MySQL5InnoDBDialect");
            //properties.put("hibernate.implicit_naming_strategy", "");
            //properties.put("hibernate.physical_naming_strategy", "org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl");
            properties.put("hibernate.physical_naming_strategy", "org.springframework.boot.orm.jpa.hibernate.SpringPhysicalNamingStrategy");
            MySQLConnection jdbcConnection = new ConnectionImpl("127.0.0.1", 3306, properties, "demo", "jdbc:mysql://localhost:3306/demo");
            jdbcConnection.createNewIO(true);
            MyDatabaseMetaData databaseMetaData = new MyDatabaseMetaData(jdbcConnection, "demo");
            StandardServiceRegistry standardRegistry = new StandardServiceRegistryBuilder()
                    .addService(JdbcEnvironment.class, new JdbcEnvironmentImpl(databaseMetaData, Dialect.getDialect(properties)))
                    .addService(ConnectionProvider.class, new HikariConnectionProvider(){{
                        configure(properties);
                    }})
                    .applySettings(properties)
                    .build();

            MetadataSources metadataSources = new MetadataSources(standardRegistry)
                    .addAnnotatedClass(UserInfo.class)
                    .addAnnotatedClassName("com.gyk.demo.entity.UserInfo")
                    .addPackage("com.gyk.demo.entity");
//                    .getMetadataBuilder()
//                    .applyImplicitNamingStrategy(ImplicitNamingStrategyJpaCompliantImpl.INSTANCE).build();
            Metadata metadata = metadataSources.getMetadataBuilder()
                    .applyImplicitNamingStrategy(ImplicitNamingStrategyJpaCompliantImpl.INSTANCE)
                    .build();
            BootstrapContext bootstrapContext = new BootstrapContextImpl(standardRegistry, new MetadataBuilderImpl.MetadataBuildingOptionsImpl(standardRegistry));


//            metadata.getDatabase().getDefaultNamespace().getTables().forEach(table -> {
//                System.out.println("tt --> " + table.getName());
//            });

            MetadataBuilderImpl metadataBuilder = new MetadataBuilderImpl(metadataSources, standardRegistry);
            SessionFactoryBuilder sessionFactoryBuilder = new SessionFactoryBuilderImpl(metadataBuilder.build(), bootstrapContext);
            //SessionFactory sessionFactory = sessionFactoryBuilder.build();
            SessionFactory sessionFactory = metadata.buildSessionFactory();
            Session session = sessionFactory.openSession();

            JpaRepositoryFactory repositoryFactory = new JpaRepositoryFactory(session);
            UserRepository repository = repositoryFactory.getRepository(UserRepository.class);
            for (int i = 0; i < 10; i++) {
                UserInfo userInfo = new UserInfo();
                userInfo.setCreateTime(new Date());
                userInfo.setJobNumber(i + 10 + "");
                userInfo.setName("name is  ---> " + i);
                repository.save(userInfo);
            }
            session.disconnect().commit();
            repository.findAll().forEach(System.out::println);
            sessionFactory.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
