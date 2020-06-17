# products_etl_mk

## Description

This is the ETL process for this [Products API]().

I leveraged node streams for transforming and cleaning multiple unstructed CSV files to ones that fit this [schema](https://github.com/maxwellrk/products_db_mk). 
The loading of the data was done through MariaDB's Load Data Infile, as the files themselves had over 60 million+ lines.
