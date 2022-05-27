import { FC } from "react"
import { useTranslation } from "react-i18next"
import {
  SelectResourceFormProps,
  DatabaseItemProps,
  ApiItemProps,
} from "./interface"
import {
  MysqlIcon,
  PostgresIcon,
  RestApiIcon,
  RedisIcon,
} from "../assets/icons"
import {
  categoryCss,
  resourceListCss,
  resourceItemCss,
  resourceNameCss,
  selectLayoutCss,
} from "./style"
export const SelectResourceForm: FC<SelectResourceFormProps> = (props) => {
  const { onSelect } = props
  const { t } = useTranslation()

  const databaseList: DatabaseItemProps[] = [
    {
      title: t("editor.action.resource.postgres.name"),
      img: <PostgresIcon />,
      draft: true,
      type: "Postgres",
    },
    {
      title: t("editor.action.resource.mySql.name"),
      img: <MysqlIcon />,
      type: "MySQL",
    },
    {
      title: t("editor.action.resource.redis.name"),
      img: <RedisIcon />,
      draft: true,
      type: "Redis",
    },
  ]
  const apiList: ApiItemProps[] = [
    {
      title: t("editor.action.resource.restApi.name"),
      img: <RestApiIcon />,
      type: "REST API",
    },
  ]

  return (
    <div css={selectLayoutCss}>
      <div>
        <div css={categoryCss}>{t("editor.action.form.title.database")}</div>
        <div css={resourceListCss()}>
          {databaseList.map((database) => (
            <div
              key={database.title}
              css={resourceItemCss}
              onClick={() => {
                !database.draft && onSelect(database.type)
              }}
            >
              <div>{database.img}</div>
              <div css={resourceNameCss}>{database.title}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div css={categoryCss}>{t("editor.action.form.title.api")}</div>
        <div css={resourceListCss(true)}>
          {apiList.map((api) => (
            <div
              key={api.title}
              css={resourceItemCss}
              onClick={() => {
                !api.draft && onSelect(api.type)
              }}
            >
              <div>{api.img}</div>
              <div css={resourceNameCss}>{api.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
