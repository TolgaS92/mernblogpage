import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '10px 50px',
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'inline',
    justifyContent: 'flex-end',
    paddingLeft: '490px',
    width: '500',
  },
  profile: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '600px',
    marginTop: '10px',
  },
  userName: {
    marginLeft: '10px',
    display: 'flex',
    alignItems: 'center',
    width: '150px',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  button: {
    marginRight: '5px',
  },
  signIn: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '10px',
    marginLeft: '450px',
  },
}));