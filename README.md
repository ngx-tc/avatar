## About

@ngx-tc/avatar is an Angular library that provides developers with an easy and customizable way to display avatars in their applications. The library includes a range of pre-built avatar templates, which can be easily customized to suit the specific needs of your application. These templates include standard avatar shapes, such as circles and squares, as well as customizable options for size, color, and image source.

## Usage

Install `@ngx-tc/avatar` in your project:

```
npm install @ngx-tc/avatar
```

Import `TcAvatarModule` e.g. in your `app.module.ts`:
```typescript
import { TcAvatarModule } from '@ngx-tc/avatar';

@NgModule({
  imports: [
    ...
    TcAvatarModule
  ],
})
export class AppModule {}
```

Use the `tc-avatar` component in you app:
```html
<tc-avatar [src]="'image source'"></tc-avatar>
<tc-avatar [initials]="'JD'"></tc-avatar>
```

## Demo
To view a working demo of the library in action, please follow the provided link. The demo will allow you to explore the various components and features included in this library and see how they can be used in your Angular applications.
[http://tc-library.type-code.pro/#/components/avatars](http://tc-library.type-code.pro/#/components/avatars)
