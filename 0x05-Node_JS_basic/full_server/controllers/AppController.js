/**
 * Contains the miscellaneous route handlers.
 * @author Nancy Njuguna <https://github.com/Kira-wambui>
 */
class AppController {
    static getHomepage(request, response) {
      response.status(200).send('Hello Holberton School!');
    }
  }
  
  export default AppController;
  module.exports = AppController;