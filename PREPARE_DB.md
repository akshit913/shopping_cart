# Preparing the Database
```sql
create database shopdb;
create user shopper identified by 'shoppass';
grant all privileges on shopdb to shopper;
grant all privileges on shopdb.* to shopper;
```