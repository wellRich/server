package com.gyk.study.jpa.easy;

import com.gyk.study.jpa.entity.UserInfo;
import com.gyk.study.jpa.entity.UserRepository;
import com.mysql.cj.conf.ConnectionUrlParser;
import com.mysql.cj.conf.DatabaseUrlContainer;
import com.mysql.cj.conf.HostInfo;
import com.mysql.cj.jdbc.*;
import com.mysql.cj.jdbc.result.ResultSetFactory;
import com.zaxxer.hikari.hibernate.HikariConnectionProvider;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.boot.Metadata;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.model.naming.ImplicitNamingStrategyJpaCompliantImpl;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.dialect.Dialect;
import org.hibernate.engine.jdbc.connections.spi.ConnectionProvider;
import org.hibernate.engine.jdbc.env.internal.JdbcEnvironmentImpl;
import org.hibernate.engine.jdbc.env.spi.JdbcEnvironment;
import org.springframework.data.jpa.repository.support.JpaRepositoryFactory;
import java.sql.SQLException;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
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
            String url = "jdbc:mysql://localhost:3306/jpa?serverTimezone=Asia/Shanghai&useUnicode=true&characterEncoding=utf-8&useSSL=false";
            Properties properties = new Properties();
            properties.put("user", "root");
            properties.put("hibernate.connection.url", url);
            properties.put("hibernate.connection.username", "root");
            properties.put("hibernate.connection.password", "123456@abc");
            properties.put("hibernate.connection.driver_class", "com.mysql.cj.jdbc.Driver");
            properties.put("password", "123456@abc");
            properties.put("hibernate.ddl_auto", "update");
            properties.put("hibernate.show_sql", "true");
            properties.put("hibernate.format_sql", "true");
            properties.put("hibernate.dialect", "org.hibernate.dialect.MySQL5InnoDBDialect");
            properties.put("hibernate.physical_naming_strategy", "org.springframework.boot.orm.jpa.hibernate.SpringPhysicalNamingStrategy");

            DatabaseUrlContainer databaseUrlContainer = ConnectionUrlParser.parseConnectionString(url);

            HostInfo hostInfo = new HostInfo(databaseUrlContainer, "127.0.0.1", 3306, "root", "123456@abc", new HashMap<String, String>(){{
                put("serverTimezone", "Asia/Shanghai");
            }});
            JdbcConnection jdbcConnection = ConnectionImpl.getInstance(hostInfo);
            StatementImpl statement = new StatementImpl(jdbcConnection, "jpa");
            ResultSetFactory resultSetFactory = new ResultSetFactory(jdbcConnection, statement);
            DatabaseMetaData databaseMetaData = new MyDatabaseMetaData(jdbcConnection, "jpa", resultSetFactory);
            StandardServiceRegistry standardRegistry = new StandardServiceRegistryBuilder()
                    .addService(JdbcEnvironment.class, new JdbcEnvironmentImpl(databaseMetaData, Dialect.getDialect(properties)))
                    .addService(ConnectionProvider.class, new HikariConnectionProvider(){{
                        configure(properties);
                    }})
                    .applySettings(properties)
                    .build();
            MetadataSources metadataSources = new MetadataSources(standardRegistry)
                    .addAnnotatedClassName(UserInfo.class.getName());
            Metadata metadata = metadataSources.getMetadataBuilder()
                    .applyImplicitNamingStrategy(ImplicitNamingStrategyJpaCompliantImpl.INSTANCE)
                    .build();
            SessionFactory sessionFactory = metadata.getSessionFactoryBuilder().build();
            Session session = sessionFactory.openSession();
            JpaRepositoryFactory repositoryFactory = new JpaRepositoryFactory(session);
            UserRepository repository = repositoryFactory.getRepository(UserRepository.class);
            Transaction transaction = session.getTransaction();
            transaction.begin();
            for (int i = 0; i < 10; i++) {
                UserInfo userInfo = new UserInfo();
                userInfo.setCreateTime(new Date());
                userInfo.setJobNumber(i + 10 + "");
                userInfo.setName("name is  ---> " + i);
//                session.evict(userInfo);
                repository.save(userInfo);

            }
            transaction.commit();

            System.out.println(transaction);
            List<UserInfo> userInfos = repository.findAll();
            userInfos.forEach(System.out::println);
            sessionFactory.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
