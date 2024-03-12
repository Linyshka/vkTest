import { Icon24Followers, Icon24Privacy, Icon24User } from '@vkontakte/icons';
import { Accordion, Group, MiniInfoCell} from '@vkontakte/vkui';
import GroupCardProps from '../Groups/type';
import Avatar from '../Avatar/Avatar';
import { useState } from 'react';

const GroupCard = ({ group }: GroupCardProps) => {

  const [openAccordion, setOpenAccordion] = useState(false)

  const formatEnding = (value: number, type: "common" | "friends") => {
    if (value % 10 === 1) {
      return type == "common" ? "" : "г"
    } else if (value % 10 > 1 && value % 10 < 5) {
      return type == "common" ? "а" : "га"
    } 
    return type == "common" ? "ов" : "зей"
  }

  return (
      <Group>
        <MiniInfoCell
          mode="accent"
          before={<Avatar color={group.avatar_color}/>}>
          {group.name}
        </MiniInfoCell>

          <MiniInfoCell
            mode="accent"
            before={<Icon24Followers />} 
              >
                {`${group.members_count} подписчик${formatEnding(group.members_count, "common")}`}
          </MiniInfoCell>

          <MiniInfoCell
            mode="accent"
            before={<Icon24Privacy />}
              >
                Тип приватности: {group.closed ? "Закрытая" : "Открытая"}
          </MiniInfoCell>

          {group.friends && <MiniInfoCell
            mode="more"
            onClick={() => setOpenAccordion(!openAccordion)}
            before={<Icon24User />} 
              >
                {`${group.friends.length} дру${formatEnding(group.friends.length, "friends")}`}
          </MiniInfoCell>}

          <Accordion expanded={openAccordion}>
            <Accordion.Content>
              elkfnreklek
            </Accordion.Content>
          </Accordion>
            </Group>
  )
}

export default GroupCard;