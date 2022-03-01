# Entities

## Auth

### User

| Name                 | Type   | Required |
| -------------------- | ------ | :------: |
| id                   | string |    ✅    |
| aud                  | string |    ✅    |
| role                 | string |    ✅    |
| email                | string |    ✅    |
| encrypted_password   | string |    ✅    |
| confirmation_sent_at | date   |    ✅    |
| last_sign_in_at      | date   |    ✅    |
| email_confirmed_at   | string |    ✅    |
| raw_app_meta_data    | string |    ✅    |
| created_at           | date   |    ✅    |
| updated_at           | date   |    ✅    |
| confirmed_at         | date   |    ✅    |

## Public

### Link

| Name            | Type    | Required |
| --------------- | ------- | :------: |
| id              | string  |    ✅    |
| name            | string  |    ✅    |
| author          | string  |    ✅    |
| password        | string  |    ✅    |
| downloads       | integer |    ✅    |
| total_downloads | integer |    ❌    |
| url             | string  |    ✅    |
| url_query       | string  |    ✅    |
| created_at      | date    |    ✅    |
