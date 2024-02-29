import styled from 'styled-components'
import menus from './data/menus.json'
import { useSession } from '@hooks'
import { useLastUpdate } from './hooks/use-last-update'
import { retrieveUserBadge } from './utils/sidebar-utils'
import { Badge } from '@components/Badge'
import { Menus, Menu } from './components/Menu'

export const Sidebar = styled(({ className }) => {
  const { lastUpdate, isLoadingLastUpdate } = useLastUpdate()

  const session = useSession()
  const selectedUserId = session?.user.id
  const { name, role, userId } = retrieveUserBadge(selectedUserId)

  return (
    <aside className={className}>
      <Menus>
        {menus
          .filter(({ show }) => Boolean(show))
          .map(({ text, icon, link, menuId }) => (
            <Menu icon={icon} text={text} link={link} key={menuId} />
          ))}
      </Menus>
      <BadgeContainer>
        {!isLoadingLastUpdate && <UpdateNotification date={lastUpdate} />}
        <Badge
          name={name}
          role={role}
          imageUrl={require(`../../img/profile/${userId}.jpg`)}
        />
      </BadgeContainer>
    </aside>
  )
})`
  --container-shadow: 0px 7px 29px 0px rgba(0, 0, 0, 0.2);
  --bg-color: #000000;
  --bg-color-hover: #191a00;
  --color: #fff200;

  grid-row: 2/3;
  background-color: var(--bg-color);
  color: var(--color);
  fill: var(--color);
  box-shadow: var(--container-shadow);
  font-family: Poppins;
  padding: 0 15px 10px 15px;
  align-self: stretch;
  display: flex;
  flex-direction: column;
`

const UpdateNotification = styled(({ className, date }) => {
  function formatDate(dateString) {
    if (dateString) {
      const date = new Date(dateString)
      const formatterOptions = {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC'
      }

      const formatter = new Intl.DateTimeFormat('fr-FR', formatterOptions)
      const formattedDate = formatter
        .format(date)
        .replace(/\b\w/g, (l) => l.toUpperCase())
      return formattedDate
    }

    return dateString
  }

  return <p className={className}>Mise à jour : {formatDate(date)} </p>
})`
  margin-bottom: 10px;
  text-align: center;
  font-size: clamp(8px, 0.8vw, 10px);
  line-height: 100%;
`

const BadgeContainer = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))`
  margin-top: auto;
`
