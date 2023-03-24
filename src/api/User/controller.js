import User from '../Comman/userModel';
import viewtopics from '../Comman/TopicModel';
import comment from '../Comman/topicCommentModel';
import chat from '../Comman/userChatModel';
import {sendEmail} from '../Comman/email';

export const userLogins = (req, res) => {
	User.findOne( {"UserName":req.query.UserName, "Password":req.query.Password}, (err, result)=> {
    res.send(result);
	})
}

export const create = (req, res) => {
  
  User.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } 
       else {
          res.send(result);
        }
      })
    }



export const Showregs = (req, res) => {
  User.find({}, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
}


export const forgotpassword = (req, res) => {
  User.find({"Emailid":req.query.Emailid}, (err, result) => {
    if (err) {
      res.send(err);
    }
     else {
      result.map(results => {
      const subject = 'Credentials Recived';
      const body = `UserName: ${results.UserName}<br>Password: ${results.Password}<br>Please Login  Using these Credentials<br>Thank You.`;
      sendEmail(req.query.Emailid, subject, body);
      })
      res.send(result);
    }
  })
}
export const updateProfile = (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}

export const viewProfile = (req, res) => {
  User.find( {"UserName":req.query.UserName}, (err, result)=> {
    res.send(result.map(record => {
      return record;
    }));
  })
}

export const showtopics = (req, res) => {
  viewtopics.find({"UserName":req.query.UserName}, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
}
export const Addcomment = (req, res) => {
  
  comment.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } 
       else {
          res.send(result);
        }
      })
    }

    export const Showcomments = (req, res) => {
      comment.find({}, (err, results) => {
        if (err) {
          res.send(err);
        } else {
          res.send(results);
        }
      })
    }

    export const Addchats = (req, res) => {
  
      chat.create(req.body, (err, result) => {
        if (err) {
          res.send(err);
        } 
           else {
              res.send(result);
            }
          })
        }
    
        export const Showchats = (req, res) => {
          chat.find({$or:[{"UserName":req.query.UserName ,"ToUser":req.query.ToUser}, {"UserName":req.query.ToUser ,"ToUser":req.query.UserName}]}, (err, results) => {
            if (err) {
              res.send(err);
            } else {
              res.send(results);
            }
          })
        }