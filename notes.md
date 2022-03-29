My Notes File

Our fetch request:
    componentDidMount() { //note: fetch request default ot GET so you dont need the second part
        fetch('http://localhost:3000/api/v1/attendees', {
        method: 'GET'
        })
        .then(response => response.json()) //response here is the return value of the fetch request
        .then(data => console.log(data))  //data here is the return value above (which is the fetch return in json form)
    } 


NOTE:
 - need to run backend server (on localhost 3000) and the frontend npm start second so you can run on a different port (3001)
 - have to install redux:
    - npm install redux --save react-redux --save redux-thunk --save react-router-dom --save
    - the save tag adds them to the package.json file, which can be imported into your files
- I used <> as fragments but it's better to write out <React.Fragment> and </React.Fragment>


GREAT blog for clicking and unclicking components
- https://betterprogramming.pub/rendering-components-in-onclick-events-in-react-bc0d7b54e1cd

Used to render component and route ChannelMergerNode
- https://www.codegrepper.com/code-examples/javascript/onclick+change+route+react

For withRouter in AttendeeInput - to use this.props.histpory(push)
- https://codesource.io/how-to-use-this-props-history-push-on-your-react-project/
    - "you can only use this.props.history.push() function inside the component page that already listed on your project route."
    - "or use withRouter() HOC if the component is not avaible in the route list...."
    -  //https://stackoverflow.com/questions/44522811/how-to-redirect-to-home-page-after-submitting-redux-form
    

To Refactor:
- pages 81-82 to separate form from Input Component
- page 118 - one button for all to keep them styled 
- make this accessible! using labels and such - https://medium.com/@emilymears/getting-started-with-web-accessibility-in-react-9e591fdb0d52
- maybe use combineReducer?
- 

