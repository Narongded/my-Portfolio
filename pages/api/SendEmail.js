import nodemailer from 'nodemailer'

export default (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'slackdevtool002@gmail.com',
            pass: 'jackkubpom55'
        }
    });
    var mailOptions = {
        from: `slackdevtool002@gmail.com`,
        to: `${req.body.email}`,
        subject: 'Resume Narongded Pinprechachai',
        text: `
           สวัสดีครับ ผมนาย ณรงค์เดช ปิ่นปรีชาชัย กำลังศึกษาอยู่ชั้นปีที่ 4 คณะเทคโนโลยีสารสนเทศ สาขาวิชาเทคโนโลยีสารสนเทศ แขนงวิศวกรรมซอฟต์แวร์ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
           ตำแหน่งที่ต้องการสมัครงาน     
                Back-end Developer ( Node.js )
           ระยะเวลาที่สามารถเริ่มงาน
                วันที่ 16 มิย. 2564 `,
        attachments: [
            {   
                filename: 'Resume.pdf',
                path: process.cwd() + '/public/file/Narongded Pinprechachai.pdf' // stream this file
            }
        ]
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    res.status(200).json({ status: 'Success' })
}