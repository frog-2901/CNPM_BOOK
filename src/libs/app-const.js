export class AppConst {
  static DEFAULT_PAGE = 1;
  static DEFAULT_PAGE_LIMIT = 12;
  static RESPONSE_CODE = {
    SUCCESS: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    PERMISSION_DENIED: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    SYSTEM_EXCEPTION: 500,
    BAD_GATEWAY: 502,
  };
  static STATUS = {
    ACTIVE: 1,
    INACTIVE: 2,
    REMOVED: 0,
  };
  static OTP_TYPE = {
    FORGET_PASSWORD: "forget-password",
    REGISTER: "register",
  };
  static REGEX = {
    EMAIL: /^[a-zA-Z0-9._-]+@[a-z]+\.[a-z]{2,6}$/,
    PHONE: /^[+][0-9]{7,13}$/,
    UUID: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
    DATE: /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/,
    OBJECT_ID: /^[a-fA-F0-9]{24}$/,
    ADMIN_PASSWORD:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?^+$%"&()^_!&"-])[A-Za-z\d@$!%*#?^+$%"&()^_!&"-]{8,}$/,
    VIETNAMESE:
      /^[a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯưẠạẢảẤấẦầẨẩẪẫẬậẮắẰằẲẳẴẵẶặẸẹẺẻẼẽẾếỀềỂểỄễỆệỈỉỊịỌọỎỏỐốỒồỔổỖỗỘộỚớỜờỞởỠỡỢợỤụỦủỨứỪừỬửỮữỰựỳỲỴỵỶỷỸỹ\s]+$/,
  };
}
