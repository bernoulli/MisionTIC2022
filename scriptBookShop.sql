{\rtf1\ansi\ansicpg1252\cocoartf2513
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;\f1\fswiss\fcharset0 Helvetica-Bold;}
{\colortbl;\red255\green255\blue255;\red128\green0\blue0;\red0\green0\blue128;\red0\green0\blue255;
\red255\green0\blue0;}
{\*\expandedcolortbl;;\csgenericrgb\c50196\c0\c0;\csgenericrgb\c0\c0\c50196;\csgenericrgb\c0\c0\c100000;
\csgenericrgb\c100000\c0\c0;}
\margl1440\margr1440\vieww28600\viewh17480\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 \
\
\pard\pardeftab720\partightenfactor0

\f1\b \cf2 CREATE
\f0\b0 \cf0  
\f1\b \cf2 TABLE
\f0\b0 \cf0  Book (\
	id_Book 
\f1\b \cf3 integer
\f0\b0 \cf0  
\f1\b \cf2 not
\f0\b0 \cf0  
\f1\b \cf2 null
\f0\b0 \cf0  
\f1\b \cf2 primary
\f0\b0 \cf0  
\f1\b \cf2 key
\f0\b0 \cf0 , \
	isbn 
\f1\b \cf2 varchar
\f0\b0 \cf0 (\cf4 32\cf0 ) 
\f1\b \cf2 unique
\f0\b0 \cf0 ,\
	title 
\f1\b \cf2 varchar
\f0\b0 \cf0 (\cf4 255\cf0 ),\
	
\f1\b \cf2 year
\f0\b0 \cf0  
\f1\b \cf3 integer
\f0\b0 \cf0 \
\
)\cf5 ;\cf0 \
\

\f1\b \cf2 CREATE
\f0\b0 \cf0  
\f1\b \cf2 TABLE
\f0\b0 \cf0  Stock(\
	id_stock 
\f1\b \cf3 integer
\f0\b0 \cf0  
\f1\b \cf2 not
\f0\b0 \cf0  
\f1\b \cf2 null
\f0\b0 \cf0 ,\
	amount 
\f1\b \cf3 integer
\f0\b0 \cf0 ,\
	
\f1\b \cf2 primary
\f0\b0 \cf0  
\f1\b \cf2 key
\f0\b0 \cf0  (id_stock),\
	
\f1\b \cf2 foreign
\f0\b0 \cf0  
\f1\b \cf2 key
\f0\b0 \cf0  (id_Stock) 
\f1\b \cf2 references
\f0\b0 \cf0  Book (id_Book)\
	\
)\
\
\

\f1\b \cf2 CREATE
\f0\b0 \cf0  
\f1\b \cf2 TABLE
\f0\b0 \cf0  Sales(\
	id_sales 
\f1\b \cf3 integer
\f0\b0 \cf0  
\f1\b \cf2 not
\f0\b0 \cf0  
\f1\b \cf2 null
\f0\b0 \cf0  
\f1\b \cf2 primary
\f0\b0 \cf0  
\f1\b \cf2 key
\f0\b0 \cf0 ,\
	sale_date 
\f1\b \cf3 datetime
\f0\b0 \cf0  
\f1\b \cf2 not
\f0\b0 \cf0  
\f1\b \cf2 null
\f0\b0 \cf0 ,\
	id_Book 
\f1\b \cf3 integer
\f0\b0 \cf0 ,\
	units 
\f1\b \cf3 integer
\f0\b0 \cf0 ,\
	
\f1\b \cf2 foreign
\f0\b0 \cf0  
\f1\b \cf2 key
\f0\b0 \cf0  (id_book) 
\f1\b \cf2 references
\f0\b0 \cf0  Book (id_Book)\
\
)\cf5 ;}