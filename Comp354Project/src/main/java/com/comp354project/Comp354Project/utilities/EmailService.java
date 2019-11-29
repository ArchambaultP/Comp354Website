package com.comp354project.Comp354Project.utilities;

import jodd.mail.Email;
import jodd.mail.MailServer;
import jodd.mail.SendMailSession;
import jodd.mail.SmtpServer;

/**
 * Service for email related functions.
 */
public class EmailService {
    private final String serviceEmail = "comp354.team6@gmail.com";
    private final String servicePwd = "mihcaelsad";

    public EmailService(){}

    /**
     * Create email object to be sent.
     * @param receivingEmail address to send created email.
     * @param subject text to appear in subject line of email.
     * @param body content of email.
     * @return created email object.
     */
    public Email buildEmail(String receivingEmail, String subject, String body){
        Email email = Email.create()
                .from(serviceEmail)
                .to(receivingEmail)
                .subject(subject)
                .htmlMessage(body);

        return email;
    }

    /**
     * Sends an email object to a receiving address.
     * @param email Email to send.
     */
    public void sendEmail(Email email){
        SmtpServer smtpServer = MailServer.create()
                .ssl(true)
                .host("smtp.gmail.com")
                .auth(serviceEmail,servicePwd)
                .buildSmtpMailServer();

        SendMailSession emailSession = smtpServer.createSession();
        emailSession.open();
        emailSession.sendMail(email);
        emailSession.close();
    }

    /**
     * Generates a html formatted email body from a template with a bunch of styling.
     * @param instructionTitle String that will be displayed in bold at the top of the email.
     * @param instructions Message informing receiver what to do.
     * @param pageName Name of the page receiver needs to go to next.
     * @param pageUrl Link to the page to go to.
     * @param codeName Type of code to be used on page.
     * @param code Code to use.
     * @return
     */
    public String buildEmailBody(String instructionTitle,String instructions,String pageName, String pageUrl, String codeName, String code){
        return "<body style=\"margin: 0; padding: 0;\">\n" +
                "    <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\"> \n" +
                "        <tr>\n" +
                "            <td style=\"padding: 10px 0 30px 0;\">\n" +
                "                <table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\" style=\"border: 1px solid #cccccc; border-collapse: collapse;\">\n" +
                "                    <tr>\n" +
                "                        <td align=\"center\" bgcolor=\"#163172\" style=\"padding: 40px 0 30px 0; color: #ffffff; font-size: 28px; font-weight: bold; font-family: Arial, sans-serif;\">\n" +
                "                        <h3>354TheStars</h3>\n" +
                "                        </td>\n" +
                "                    </tr>\n" +
                "                    <tr>\n" +
                "                        <td bgcolor=\"#ffffff\" style=\"padding: 40px 30px 40px 30px;\">\n" +
                "                            <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n" +
                "                                <tr>\n" +
                "                                    <td style=\"color: #153643; font-family: Arial, sans-serif; font-size: 24px;\">\n" +
                "                                        <b>"+instructionTitle+"</b>\n" +
                "                                    </td>\n" +
                "                                </tr>\n" +
                "                                <tr>\n" +
                "                                    <td style=\"padding: 20px 0 30px 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;\">\n" +
                "                                       "+instructions+" \n" +
                "                                    </td>\n" +
                "                                </tr>\n" +
                "                                <tr style=\"padding: 20px 0 30px 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;\">\n" +
                "                                \t<td >\n" +
                "                                    \t<p><b> "+pageName+":</b>"+pageUrl +"</p>\n" +
                "                                    </td>\n" +
                "                                </tr>\n" +
                "                                <tr style=\"padding: 20px 0 30px 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;\">\n" +
                "                                \t<td>\n" +
                "                                    \t<p><b>"+ codeName +":</b>"+ code+"</p>\n" +
                "                                    </td>\n" +
                "                                </tr>                               \n" +
                "                            </table>\n" +
                "                        </td>\n" +
                "                    </tr>\n" +
                "                    <tr>\n" +
                "                        <td bgcolor=\"#163172\" style=\"padding: 30px 30px 30px 30px;\">\n" +
                "                            <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n" +
                "                                <tr>\n" +
                "                                    <td style=\"color: #ffffff; font-family: Arial, sans-serif; font-size: 14px;\" width=\"75%\">\n" +
                "                                        &reg; COMP354, Team6  2019<br/>\n" +
                "                                    </td>\n" +
                "                                    <td align=\"right\" width=\"25%\">\n" +
                "                                        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n" +
                /*
                "                                            <tr>\n" +
                "                                                <td style=\"font-family: Arial, sans-serif; font-size: 12px; font-weight: bold;\">\n" +
                "                                                    <a href=\"http://www.twitter.com/\" style=\"color: #ffffff;\">\n" +
                "                                                        <img src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/tw.gif\" alt=\"Twitter\" width=\"38\" height=\"38\" style=\"display: block;\" border=\"0\" />\n" +
                "                                                    </a>\n" +
                "                                                </td>\n" +
                "                                                <td style=\"font-size: 0; line-height: 0;\" width=\"20\">&nbsp;</td>\n" +
                "                                                <td style=\"font-family: Arial, sans-serif; font-size: 12px; font-weight: bold;\">\n" +
                "                                                    <a href=\"http://www.twitter.com/\" style=\"color: #ffffff;\">\n" +
                "                                                        <img src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/fb.gif\" alt=\"Facebook\" width=\"38\" height=\"38\" style=\"display: block;\" border=\"0\" />\n" +
                "                                                    </a>\n" +
                "                                                </td>\n" +
                "                                            </tr>\n" +

                 */
                "                                        </table>\n" +
                "                                    </td>\n" +
                "                                </tr>\n" +
                "                            </table>\n" +
                "                        </td>\n" +
                "                    </tr>\n" +
                "                </table>\n" +
                "            </td>\n" +
                "        </tr>\n" +
                "    </table>\n" +
                "</body>";
    }
}
