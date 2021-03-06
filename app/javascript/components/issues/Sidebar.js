import { UserAvatar } from 'bluebox/avatar';
import Assignees from './Assignees';
import Labels from './Labels';

export default class Sidebar extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  t = (key) => {
    if (key.startsWith('.')) {
      return i18n.t(`issues.Sidebar${key}`);
    }
    return i18n.t(key);
  }

  render() {
    const { participants } = this.props;

    return <div className="issue-sidebar">
      <Assignees {...this.props} />

      <Labels {...this.props} />

      <div className="sidebar-box issue-participants mt-3">
        <h2 className="sub-title">{participants.length} {this.t('.Participants')}</h2>
        <div className="item-list">
          {participants.map(user => <UserAvatar user={user} type="tiny" />)}
        </div>
      </div>
    </div>;
  }
}
