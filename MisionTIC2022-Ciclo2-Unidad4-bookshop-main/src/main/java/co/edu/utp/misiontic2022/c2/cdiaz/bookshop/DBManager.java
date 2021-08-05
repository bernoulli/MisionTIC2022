package co.edu.utp.misiontic2022.c2.cdiaz.bookshop;

import java.sql.Connection;
//import java.sql.Driver;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;




public class DBManager implements AutoCloseable {
    private Connection connection;

    public DBManager() throws SQLException {
        connect();
    }

    private void connect() throws SQLException {
        // TODO: program this method
        //var url = "jdbc:sqlite:/Users/bernardocuervo/Documents/ciclo2/Clases/Unidad4/BookShop2.db";
        connection = DriverManager.getConnection(url);
        /*
        try{
        var url = "jdbc:sqlite:/Users/bernardocuervo/Documents/ciclo2/Clases/Unidad4/BookShop2.db";
        System.out.println("entra");
        connection = DriverManager.getConnection(url);
        // Manejo de los errores
        }catch (SQLException e) {
            e.printStackTrace();
            System.out.println("Excepción SQL: " + e.getMessage());
            System.out.println("Estado SQL: " + e.getSQLState());
            System.out.println("Código de error: " + e.getErrorCode());
        
        }
        */
        
    }

    /**
     * Close the connection to the database if it is still open.
     *
     */
    public void close() throws SQLException {
        if (connection != null) {
            connection.close();
        }
        connection = null;
    }

     /**
     * Return the number of units in stock of the given book.
     *
     * @param book The book object.
     * @return The number of units in stock, or 0 if the book does not
     *         exist in the database.
     * @throws SQLException If somthing fails with the DB.
     */
    public int getStock(Book book) throws SQLException {


        return 0;
    } 

    /**
     * Return the number of units in stock of the given book.
     *
     * @param bookId The book identifier in the database.
     * @return The number of units in stock, or 0 if the book does not
     *         exist in the database.
     */
    public int getStock(int bookId) throws SQLException {
        // TODO: program this method

        return 0;
    }

    /**
     * Search book by ISBN.
     *
     * @param isbn The ISBN of the book.
     * @return The Book object, or null if not found.
     * @throws SQLException If somthing fails with the DB.
     */
    public Book searchBook(String isbn) throws SQLException {
        // TODO: program this method

        Book book = null;
        Statement stmt = null;
        ResultSet rs = null;

        try{
            stmt = connection.createStatement();
            rs = stmt.executeQuery("select * from Book where isbn = '" + isbn + "'");
            if(rs.next()){
                book = new Book();
                book.setId(rs.getInt("id_Book"));
                book.setIsbn(rs.getString("isbn"));
                book.setTitle(rs.getString("title"));
                book.setYear(rs.getInt("year"));
            }
        }finally{
            if(rs != null){
                rs.close();
            }
            if(stmt != null){
                stmt.close();
            }
        }
        

        return book;
        
    } 

    private Book Book() {
        return null;
    }

    /**
     * Sell a book.
     *
     * @param book The book.
     * @param units Number of units that are being sold.
     * @return True if the operation succeeds, or false otherwise
     *         (e.g. when the stock of the book is not big enough).
     * @throws SQLException If somthing fails with the DB.
     */
    public boolean sellBook(Book book, int units) throws SQLException {
        return sellBook(book.getId(), units);
    }

    /**
     * Sell a book.
     *
     * @param book The book's identifier.
     * @param units Number of units that are being sold.
     * @return True if the operation succeeds, or false otherwise
     *         (e.g. when the stock of the book is not big enough).
     * @throws SQLException If something fails with the DB.
     */
    public boolean sellBook(int book, int units) throws SQLException {
        // TODO: program this method
        return false;
    }

    /**
     * Return a list with all the books in the database.
     *
     * @return List with all the books.
     * @throws SQLException If something fails with the DB.
     */
    public List<Book> listBooks() throws SQLException {
        // TODO: program this method

        var resp =  new ArrayList<Book>();
        Statement stmt = null;
        ResultSet rs = null;

        try{
            stmt = connection.createStatement();
            rs = stmt.executeQuery("SELECT * FROM Book");
            while(rs.next()){
                Book book = new Book();
                book.setId(rs.getInt("id_Book"));
                book.setIsbn(rs.getString("isbn"));
                book.setTitle(rs.getString("title"));
                book.setYear(rs.getInt("year"));

                resp.add(book);
            }
        }finally{
            if(rs != null){
                rs.close();
            }
            if(stmt != null){
                stmt.close();
            }
        }

        return resp;
        
    } 
}
