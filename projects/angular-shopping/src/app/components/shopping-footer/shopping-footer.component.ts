import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-footer',
  templateUrl: './shopping-footer.component.html',
  styleUrls: ['./shopping-footer.component.css']
})
export class ShoppingFooterComponent {
  public linkedin: string = `https://www.linkedin.com/in/madhu-krishna-kummari-802258247?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B2ondr6x7Q0a1ZLSC%2FPxNvw%3D%3D`;
  public instagram: string = `https://instagram.com/madhukrishnaonline?igshid=YTQwZjQ0NmI0OA==`;
  public facebook: string = `https://www.facebook.com/profile.php?id=100019533126649`;
  public github:string = 'https://github.com/madhukrishnaonline';

  public mail: string = `mailto:madhukrishnaonline@gmail.com`;
  public phone: string = `tel:+919121493579`;

  public whatsApp: string = `https://wa.me/9121493579`;

  public target: string = `_blank`;

  // Redirect to user's mail client via mailto (opens mail composer)
  public joinNewsletter(email?: string) {
    const to = 'madhukrishnaonline@gmail.com';
    const subject = encodeURIComponent('Newsletter signup');
    const body = encodeURIComponent(email ? `Please add ${email} to the newsletter list.` : 'Please add me to the newsletter list.');
    const href = `mailto:${to}?subject=${subject}&body=${body}`;
    window.location.href = href;
  }
}
