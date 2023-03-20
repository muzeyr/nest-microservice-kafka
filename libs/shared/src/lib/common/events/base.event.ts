abstract class BaseEvent {
  abstract retrieveEventName();
}

class LikeEvent extends BaseEvent {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  retrieveEventName() {}
}

class UnlikeEvent extends LikeEvent {}
