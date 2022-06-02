import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { User } from '../../models/User';

import { UserInfoComponent } from './user-info.component';

describe('UserInfoComponent', () => {
  let component: UserInfoComponent;
  let fixture: ComponentFixture<UserInfoComponent>;
  const user: User = {
    id: 1,
    username: 'Jan Kowalski',
    reputation: 1200,
    avatar_link:
      'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Round&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=WinkWacky&eyebrowType=AngryNatural&mouthType=Concerned&skinColor=Yellow'
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserInfoComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('displays user profile details if user is authenticated', () => {
    component.loggedUser = user;
    fixture.detectChanges();
    const usernameEl = fixture.debugElement.query(By.css('.user-name'));
    const userReputationEl = fixture.debugElement.query(
      By.css('.user-reputation')
    );
    const userAvatarEl = fixture.debugElement.query(By.css('.user-avatar'));

    const loginButtonEl = fixture.debugElement.query(By.css('.login-button'));

    expect(usernameEl).toBeTruthy();
    expect(userReputationEl).toBeTruthy();
    expect(userAvatarEl).toBeTruthy();

    expect(usernameEl.nativeElement.textContent.trim()).toBe(user.username);
    expect(userReputationEl.nativeElement.textContent.trim()).toBe(
      'Reputation: ' + user.reputation
    );
    expect(userAvatarEl.nativeElement.attributes['src'].textContent).toBe(
      user.avatar_link
    );

    expect(loginButtonEl).toBeFalsy();
  });

  it('displays login buton if user is not authenticated', () => {
    component.loggedUser = null;
    fixture.detectChanges();

    const loginButtonEl = fixture.debugElement.query(By.css('.login-button'));
    expect(loginButtonEl).toBeTruthy();
    expect(loginButtonEl.nativeElement.textContent.trim()).toBe('Login');
  });
});
