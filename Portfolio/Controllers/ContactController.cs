using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Net.Mail;

namespace Portfolio.Controllers
{
    public class ContactController : Controller
    {
        [HttpPost]
        public IActionResult Send(
            string FirstName,
            string LastName,
            string Email,
            string Phone,
            string Service,
            string Message)
        {
            try
            {
                var mail = new MailMessage();
                mail.From = new MailAddress("nisalkawshalya555@gmail.com");
                mail.To.Add("nisalkawshalya555@gmail.com");
                mail.Subject = "New Contact Message from Portfolio";
                mail.Body = $@" 
                      Name: {FirstName} {LastName} 
                      Email: {Email} 
                      Phone: {Phone} 
                      Service: {Service}
                      Message:{Message}
                ";
                var smtp = new SmtpClient("smtp.gmail.com", 587);
                smtp.Credentials = new NetworkCredential(
                    "nisalkawshalya555@gmail.com",
                    "ggez rowr twcw qyyi"
                );
                smtp.EnableSsl = true;
                smtp.Send(mail);
                TempData["Success"] = "Message sent successfully!";
            }
            catch
            {
                TempData["Error"] = "Message sending failed!";
            }
            return Redirect("/#contact");
        }
    }
}
