export class EmailProvider {
  constructor() {}

  async sendEmail({
    to,
    subject,
    body,
  }: {
    to: string;
    subject: string;
    body: string;
  }): Promise<void> {
    // TODO: Implement email sending
    console.log(
      `Sending email to ${to} with subject ${subject} and body ${body}`
    );
  }
}
