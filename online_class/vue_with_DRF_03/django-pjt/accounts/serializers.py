# accounts/serializers.py

from dj_rest_auth.registration.serializers import RegisterSerializer
from rest_framework import serializers

# CustomRegisterSerializer는 회원가입 시 age필드를 추가로 받기위한 커스터마이징한 시리얼라이저야
# 기본 회원가입 시리얼라이저인 RegisterSerializer를 상속해서 추가 필드인 age를 새로 선언한거임
# required=True이므로, 이 필드는 반드시 프론트에서 같이 보내야함
class CustomRegisterSerializer(RegisterSerializer):
  age = serializers.IntegerField(required=True)
  # get_cleaned_data는 dj_rest_auth가 내부적으로 회원가입 데이터를 처리할때 사용하는 함수
  # 이 메서드를 오버라이트해서 age를 포함하는거임
  # validated_data.get('age','')를 통해 유효성 검사를 통과한 age값을 꺼내고 data에 추가함
  def get_cleaned_data(self):
      data = super().get_cleaned_data()
      data['age'] = self.validated_data.get('age','')
      # 이거는 파이선의 딕셔너리의 .get()메서드를 사용하는 코드로
      # dict.get('key', 기본값) 키가 있으면 그 값을 반환하고 없으면 기본값 반환하게 하는거 
      # 기본값을 넣는 이유는 age가 유효성검사에서 누락되거나 할떄 프로그램이 키에러로 죽는 등을 방지하기위한것 

      return data
  
  def save(self, request):
     user = super().save(request)
     user.age = self.validated_data.get('age','')
     user.save()
     return user