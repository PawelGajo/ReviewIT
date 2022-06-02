import { Component } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {
  loggedUser: User | null = {
    id: 1,
    username: 'Jan Kowalski',
    reputation: 1200,
    avatar_link:
      'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Round&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=WinkWacky&eyebrowType=AngryNatural&mouthType=Concerned&skinColor=Yellow'
  };
  constructor() {}
}
