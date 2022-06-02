import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PostActivity } from '../../models/Post';

@Component({
  selector: 'app-last-activity',
  templateUrl: './last-activity.component.html',
  styleUrls: ['./last-activity.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LastActivityComponent {
  @Input() activity: PostActivity;
  constructor() {}
}
