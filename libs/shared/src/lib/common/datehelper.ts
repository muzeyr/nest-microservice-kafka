/***
 * General Purpose Date Helper To Format Dates And Remove Start End Times
 */
import { LessThanOrEqual, MoreThanOrEqual } from 'typeorm';

export class DateHelper {
  public static getWeekDay(
    locale: string,
    day: number,
    format: 'long' | 'short' | 'narrow' | undefined = 'long',
  ) {
    if (day <= 0 || day > 7)
      throw new Error('Invalid day number. Expected to be in range of 1-7.');
    const baseDate = new Date(Date.UTC(2000, 0, 3)); // Monday
    baseDate.setDate(baseDate.getDate() + day - 1);
    return baseDate.toLocaleDateString(locale, { weekday: format });
  }

  public static getMonth(
    locale: string,
    month: number,
    format: 'long' | 'short' | 'narrow' | undefined = 'long',
  ) {
    if (month <= 0 || month > 12)
      throw new Error('Invalid month number. Expected to be in range of 1-12.');
    const baseDate = new Date(Date.UTC(2000, month - 1, 1)); // January
    return baseDate.toLocaleDateString(locale, { month: format });
  }

  public static getAdjacentMonth(date: Date, when: string): Date {
    let month = date.getMonth();
    switch (when) {
      default:
        throw new Error(
          "Invalid when parameter. Expected to be 'before' or 'after'.",
        );
      case 'before':
        month -= 1;
        break;
      case 'after':
        month += 1;
        break;
    }
    return new Date(new Date(date.setMonth(month)).setDate(1));
  }

  public static getDayOfMonth(date: Date, what: string): Date {
    switch (what) {
      default:
        throw new Error(
          "Invalid what parameter. Expected to be 'first' or 'last'.",
        );
      case 'first':
        return new Date(date.getFullYear(), date.getMonth(), 1);
      case 'last':
        return new Date(date.getFullYear(), date.getMonth() + 1, 0);
    }
  }

  public static getDaysInMonth(date: Date) {
    return new Date(date.getDay(), date.getMonth(), 0).getDate();
  }

  public static addDays(date: Date, value: number): Date {
    return new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() + value,
    );
  }

  public static resetHours(date: Date, when: ResetHours): Date {
    switch (when) {
      default:
        throw new Error(
          "Invalid when parameter. Expected to be 'start' or 'end'.",
        );
      case 'start':
        return new Date(date.setHours(0, 0, 0, 0));
      case 'end':
        return new Date(date.setHours(23, 59, 59, 59));
    }
  }

  public static resetHoursTotal() {
    const date = new Date();
    const startDate = LessThanOrEqual(this.resetHours(date, ResetHours.Start));
    const endDate = MoreThanOrEqual(this.resetHours(date, ResetHours.End));
    return { startDate: startDate, endDate: endDate };
  }
}

export enum ResetHours {
  Start = 'start',
  End = 'end',
}
