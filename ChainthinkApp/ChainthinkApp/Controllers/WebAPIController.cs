using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ChainthinkApp.Controllers
{
    public class WebAPIController : Controller
    {
        // GET: API
     
        public ActionResult SendEmail(string name, string email, string company, string message)
        {

            // We can write sending email code here.
            return Json(new { Status = true, Message = "Message sent successfully!" });
        }        
    }
}