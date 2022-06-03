import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-user-info-inline',
  templateUrl: './user-info-inline.component.html',
  styleUrls: ['./user-info-inline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserInfoInlineComponent {
  @Input() user: User;
  constructor() {}
}
